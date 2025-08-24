import {
    AnimatedSpan,
    Terminal,
    TypingAnimation,
  } from "@/components/magicui/terminal";
  
  export default function TerminalComp() {
    return (
      <div className="terminal-wrap mt-8 mb-4">
        <Terminal>
          <TypingAnimation className="text-gray-400">&gt; pnpm dlx bastian@latest scan</TypingAnimation>
  
          <AnimatedSpan className="text-green-500">✔ Starting security scan...</AnimatedSpan>
  
          <AnimatedSpan className="text-red-400">
            ✘ API key exposed in <code>config.js</code>
          </AnimatedSpan>
  
          <AnimatedSpan className="text-yellow-400">
            ⚠ Insecure function usage in <code>auth.js</code>
          </AnimatedSpan>
  
          <AnimatedSpan className="text-green-500">
            ✔ No vulnerabilities found in <code>utils.js</code>
          </AnimatedSpan>
  
          <TypingAnimation className="text-muted-foreground">
            Scan complete. 2 issues detected, 1 safe file.
          </TypingAnimation>
        </Terminal>
      </div>
    );
  }
  