import GlassCard from "@/components/ui/GlassCard";

export default function HeroCodeCard() {
  return (
    <GlassCard className="w-75 p-7">
      <pre className="text-section-label overflow-x-auto font-mono leading-7 whitespace-pre-wrap">
        <span className="text-[#C586C0]">const</span>{" "}
        <span className="text-emerald-light">sadaf</span> <span className="text-white">=</span>{" "}
        <span className="text-white">{"{"}</span>
        <br />
        {"  "}
        <span className="text-[#9CDCFE]">role</span>
        <span className="text-white">: </span>
        <span className="text-[#CE9178]">&quot;Frontend Developer&quot;</span>
        <span className="text-white">,</span>
        <br />
        {"  "}
        <span className="text-[#9CDCFE]">passion</span>
        <span className="text-white">: </span>
        <span className="text-[#CE9178]">&quot;Creating meaningful experiences&quot;</span>
        <span className="text-white">,</span>
        <br />
        {"  "}
        <span className="text-[#9CDCFE]">codeStyle</span>
        <span className="text-white">: </span>
        <span className="text-[#CE9178]">&quot;Clean &amp; Maintainable&quot;</span>
        <span className="text-white">,</span>
        <br />
        {"  "}
        <span className="text-[#9CDCFE]">curiosity</span>
        <span className="text-white">: </span>
        <span className="text-[#4FC1FF]">Infinity</span>
        <span className="text-white">,</span>
        <br />
        {"  "}
        <span className="text-[#9CDCFE]">currentlyLearning</span>
        <span className="text-white">: </span>
        <span className="text-[#CE9178]">&quot;Next.js&quot;</span>
        <span className="text-white">,</span>
        <br />
        {"  "}
        <span className="text-[#9CDCFE]">availableForFreelance</span>
        <span className="text-white">: </span>
        <span className="text-[#569CD6]">true</span>
        <br />
        <span className="text-white">{"};"}</span>
        <br />
        <br />
        <span className="text-[#C586C0]">export default</span>{" "}
        <span className="text-emerald-light">sadaf</span>
        <span className="text-white">;</span>
      </pre>
    </GlassCard>
  );
}
