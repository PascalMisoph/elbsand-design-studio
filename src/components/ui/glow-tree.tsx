"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { File, Folder, Zap } from "lucide-react";

import { cn } from "@/lib/utils";

export type GlowNode = {
  id: string;
  name: string;
  type: "file" | "folder";
  children?: GlowNode[];
  glow?: boolean;
};

export type GlowTreeProps = {
  data: GlowNode[];
  onSelect?: (node: GlowNode) => void;
  defaultExpanded?: string[];
  defaultSelectedId?: string;
  className?: string;
};

export default function GlowTree({ data, onSelect, defaultExpanded = [], defaultSelectedId, className }: GlowTreeProps) {
  const [expanded, setExpanded] = React.useState<Record<string, boolean>>(() => Object.fromEntries(defaultExpanded.map((id) => [id, true])));
  const [selected, setSelected] = React.useState<string | null>(defaultSelectedId ?? null);
  const prefersReducedMotion = useReducedMotion();
  const [hasMounted, setHasMounted] = React.useState(false);
  const reduceMotion = hasMounted && Boolean(prefersReducedMotion);

  React.useEffect(() => setHasMounted(true), []);

  const toggle = (id: string) => setExpanded((previous) => ({ ...previous, [id]: !previous[id] }));

  const renderNodes = (nodes: GlowNode[], level = 0) =>
    nodes.map((node) => {
      const isFolder = node.type === "folder";
      const isSelected = selected === node.id;
      const ownsSelection = Boolean(selected && node.children?.some((child) => child.id === selected));
      const isExpanded = Boolean(expanded[node.id]);

      return (
        <div key={node.id} className="group relative" role="none">
          <motion.button
            type="button"
            role="treeitem"
            aria-selected={isSelected}
            aria-expanded={isFolder ? isExpanded : undefined}
            className={cn(
              "flex min-h-11 w-full select-none items-center gap-2 rounded-md border-0 bg-transparent px-2 py-2 text-left text-sm transition-[background-color,color,box-shadow] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d37a5c] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0f0e]",
              isSelected
                ? "bg-white/[.075] text-[#fffaf4] shadow-[inset_0_0_0_1px_rgba(211,122,92,.24),0_8px_24px_rgba(0,0,0,.16)]"
                : ownsSelection
                  ? "bg-[#b74622]/[.055] text-[#d37a5c]"
                  : "text-[#aaa49a] hover:bg-white/[.04] hover:text-[#eee8df]",
            )}
            style={{ paddingLeft: level * 16 + 8, fontSize: "15px" }}
            onClick={() => {
              if (isFolder) toggle(node.id);
              setSelected(node.id);
              onSelect?.(node);
            }}
            whileHover={reduceMotion ? undefined : { scale: 1.015, x: 2 }}
            whileTap={reduceMotion ? undefined : { scale: 0.985 }}
            transition={{ duration: reduceMotion ? 0 : 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            {isFolder ? <Folder className="size-4 shrink-0" aria-hidden="true" /> : <File className="size-3.5 shrink-0" aria-hidden="true" />}
            <span className="min-w-0 flex-1 truncate">{node.name}</span>
            {node.glow && (
              <motion.span
                className="relative flex size-7 shrink-0 items-center justify-center rounded-full text-[#d37a5c]"
                animate={reduceMotion ? undefined : { filter: ["drop-shadow(0 0 2px rgba(211,122,92,.24))", "drop-shadow(0 0 8px rgba(211,122,92,.72))", "drop-shadow(0 0 2px rgba(211,122,92,.24))"] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Zap className="size-4" aria-hidden="true" />
              </motion.span>
            )}
          </motion.button>

          <AnimatePresence initial={false}>
            {node.children && node.children.length > 0 && isExpanded && (
              <motion.div
                role="group"
                initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.25, ease: "easeInOut" }}
                className="ml-4 overflow-hidden border-x-0 border-b-0 border-l border-r-0 border-t-0 border-solid border-white/12 pl-4"
              >
                {renderNodes(node.children, level + 1)}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    });

  return <div className={cn("space-y-1", className)} data-slot="glow-tree" role="tree">{renderNodes(data)}</div>;
}
