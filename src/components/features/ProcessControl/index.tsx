import React, { useState, useEffect } from 'react';
import { Droplets, Activity, Settings2, PlayCircle, StopCircle } from 'lucide-react';

const ProcessControl: React.FC = () => {
  const [valves, setValves] = useState([true, false, true]);
  const [flow, setFlow] = useState(0);
  const [pressure, setPressure] = useState(42.5);

  const toggleValve = (index: number) => {
    const newValves = [...valves];
    newValves[index] = !newValves[index];
    setValves(newValves);
  };

  useEffect(() => {
    const activeCount = valves.filter(v => v).length;
    const targetFlow = activeCount * 8.4;
    const targetPressure = 30 + activeCount * 5.2;

    const interval = setInterval(() => {
      setFlow(prev => prev + (targetFlow - prev) * 0.1);
      setPressure(prev => prev + (targetPressure - prev) * 0.1);
    }, 50);

    return () => clearInterval(interval);
  }, [valves]);

  return (
    <div className="bg-neutral-900/40 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-2xl">
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center border border-blue-500/20">
            <Droplets className="text-blue-500" size={20} />
          </div>
          <div>
            <h3 className="text-sm font-black tracking-widest uppercase text-white">Process Control</h3>
            <p className="text-[10px] mono text-neutral-500 tracking-tighter uppercase">Wastewater Infrastructure System</p>
          </div>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
          <span className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest">System_Live</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-10">
        <div className="p-5 rounded-2xl bg-black/40 border border-white/5">
          <span className="text-[10px] font-black text-neutral-600 uppercase tracking-widest mb-2 block">Net Flow Rate</span>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black mono text-blue-500">{flow.toFixed(1)}</span>
            <span className="text-[10px] font-bold text-neutral-500 uppercase">m³/s</span>
          </div>
        </div>
        <div className="p-5 rounded-2xl bg-black/40 border border-white/5">
          <span className="text-[10px] font-black text-neutral-600 uppercase tracking-widest mb-2 block">System Pressure</span>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black mono text-white">{pressure.toFixed(1)}</span>
            <span className="text-[10px] font-bold text-neutral-500 uppercase">PSI</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <Settings2 size={12} className="text-neutral-600" />
          <span className="text-[9px] font-bold text-neutral-600 uppercase tracking-widest">Valve Modulation</span>
        </div>
        {valves.map((isOpen, i) => (
          <button 
            key={i}
            onClick={() => toggleValve(i)}
            className={`w-full p-4 rounded-xl border transition-all flex items-center justify-between group ${isOpen ? 'bg-blue-500/5 border-blue-500/20' : 'bg-white/5 border-white/5 opacity-40 hover:opacity-100'}`}
          >
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-black text-neutral-500 mono">0{i+1}</span>
              <span className={`text-[11px] font-bold uppercase tracking-widest ${isOpen ? 'text-blue-500' : 'text-neutral-400'}`}>
                Feed_Line_Valve_{i === 0 ? 'Primary' : i === 1 ? 'Auxiliary' : 'Overflow'}
              </span>
            </div>
            {isOpen ? <PlayCircle size={18} className="text-blue-500" /> : <StopCircle size={18} className="text-neutral-600" />}
          </button>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-white/5">
        <div className="flex items-center gap-2">
          <Activity size={10} className="text-neutral-700" />
          <span className="text-[9px] font-bold text-neutral-800 uppercase tracking-[0.2em]">Logic_Unit_ECHO_ST04</span>
        </div>
      </div>
    </div>
  );
};

export default ProcessControl;