import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

const CodeTerminal = () => {
  const [displayedCode, setDisplayedCode] = useState("");
  const [currentLine, setCurrentLine] = useState(0);

  const codeLines = [
    "const developer = {",
    '  name: "Software Engineer",',
    '  skills: ["React", "Node.js", "MongoDB"],',
    '  experience: "3+ years",',
    '  passion: "Building amazing apps"',
    "};",
    "",
    "developer.build();",
  ];

  useEffect(() => {
    if (currentLine < codeLines.length) {
      const line = codeLines[currentLine];
      let charIndex = 0;

      const typeInterval = setInterval(() => {
        if (charIndex <= line.length) {
          setDisplayedCode((prev) => {
            const lines = prev.split("\n");
            lines[currentLine] = line.slice(0, charIndex);
            return lines.join("\n");
          });
          charIndex++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => {
            setDisplayedCode((prev) => prev + "\n");
            setCurrentLine((prev) => prev + 1);
          }, 300);
        }
      }, 50);

      return () => clearInterval(typeInterval);
    }
  }, [currentLine]);

  const highlightSyntax = (text) => {
    if (!text) return "";
    return text
      .replace(
        /(const|let|var|function|return|if|else|for|while)/g,
        '<span class="text-primary-400">$1</span>',
      )
      .replace(
        /(["'][^"']*["'])/g,
        '<span class="text-secondary-400">$1</span>',
      )
      .replace(
        /(\{|\}|\[|\]|\(|\))/g,
        '<span class="text-text-muted">$1</span>',
      )
      .replace(/(\d+)/g, '<span class="text-primary-300">$1</span>');
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="glass-card font-mono text-sm overflow-hidden"
    >
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-glass-border">
        <Terminal className="w-4 h-4 text-primary" />
        <span className="text-text-secondary text-xs">terminal.js</span>
        <div className="flex gap-1.5 ml-auto">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/50" />
        </div>
      </div>
      <div className="text-text-secondary leading-relaxed">
        <pre className="m-0">
          <code
            dangerouslySetInnerHTML={{
              __html:
                highlightSyntax(displayedCode) +
                '<span class="animate-pulse">▊</span>',
            }}
          />
        </pre>
      </div>
    </motion.div>
  );
};

export default CodeTerminal;
