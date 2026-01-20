import React, { useState, useEffect } from 'react';
import { Activity, Zap, Droplets, Gauge } from 'lucide-react';

type Mode = 'AUTO' | 'HYDRO';

const SystemDashboard: React.FC = () => {
  const [mode, setMode] = useState<Mode>('AUTO');
  const [metrics, setMetrics] = useState({ rpm: 0, torque: 0, psi: 45.2, flow: 12.8 });
  const [log, setLog] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        rpm: mode === 'AUTO' ? 3000 + Math.random() * 4000 : 800,
        torque: mode === 'AUTO' ? 250 + Math.random() * 50 : 10,
        psi: mode === 'HYDRO' ? 40 + Math.random() * 15 : 12,
        flow: mode === 'HYDRO' ? 10 + Math.random() * 5 : 2
      }));

      const hex = () => Math.floor(Math.random() * 256).toString(16).toUpperCase().padStart(2, '0');
      const newEntry = mode === 'AUTO' 
        ? `CAN: 0x${Math.floor(Math.random() * 999)} [${hex()} ${hex()} ${hex()}]`
        : `SCADA: FLOW_VLV_${Math.floor(Math.random() * 4)} -> ${Math.random() > 0.5 ? 'OPEN' : 'CLOSED'}`;
      
      setLog(prev => [newEntry, ...prev.slice(0, 5)]);
    }, 200);
    return () => clearInterval(interval);
  }, [mode]);

  return (
    <div className="bg-neutral-900/50 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md shadow-2xl">
      <div className="flex border-b border-white/5">
        <button 
          onClick={() => setMode('AUTO')}
          className={`flex-1 py-3 px-4 text-[10px] font-bold tracking-widest flex items-center justify-center gap-2 transition-colors ${mode === 'AUTO' ? 'bg-orange-500/10 text-orange-500' : 'text-neutral-500 hover:text-white'}`}
        >
          <Zap size={12} /> AUTOMOTIVE
        </button>
        <button 
          onClick={() => setMode('HYDRO')}
          className={`flex-1 py-3 px-4 text-[10px] font-bold tracking-widest flex items-center justify-center gap-2 transition-colors ${mode === 'HYDRO' ? 'bg-blue-500/10 text-blue-500' : 'text-neutral-500 hover:text-white'}`}
        >
          <Droplets size={12} /> HYDRAULIC
        </button>
      </div>

      <div className="p-6 space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <span className="text-[9px] mono text-neutral-500 uppercase tracking-tighter">
              {mode === 'AUTO' ? 'Engine RPM' : 'Line Pressure'}
            </span>
            <div className="flex items-end gap-1">
              <span className="text-xl font-black mono text-white">
                {mode === 'AUTO' ? metrics.rpm.toFixed(0) : metrics.psi.toFixed(1)}
              </span>
              <span className="text-[10px] text-neutral-600 mb-1 uppercase font-bold">
                {mode === 'AUTO' ? 'rpm' : 'psi'}
              </span>
            </div>
            <div className="h-1 bg-neutral-800 rounded-full overflow-hidden">
              <div 
                className={`h-full transition-all duration-300 ${mode === 'AUTO' ? 'bg-orange-500' : 'bg-blue-500'}`}
                style={{ width: `${mode === 'AUTO' ? (metrics.rpm / 8000) * 100 : (metrics.psi / 100) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-[9px] mono text-neutral-500 uppercase tracking-tighter">
              {mode === 'AUTO' ? 'Torque (Nm)' : 'Flow Rate'}
            </span>
            <div className="flex items-end gap-1">
              <span className="text-xl font-black mono text-white">
                {mode === 'AUTO' ? metrics.torque.toFixed(0) : metrics.flow.toFixed(1)}
              </span>
              <span className="text-[10px] text-neutral-600 mb-1 uppercase font-bold">
                {mode === 'AUTO' ? 'nm' : 'm3/s'}
              </span>
            </div>
            <div className="h-1 bg-neutral-800 rounded-full overflow-hidden">
              <div 
                className={`h-full transition-all duration-300 ${mode === 'AUTO' ? 'bg-white' : 'bg-sky-400'}`}
                style={{ width: `${mode === 'AUTO' ? (metrics.torque / 400) * 100 : (metrics.flow / 30) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-white/5">
          <div className="flex items-center gap-2 mb-3">
            <Activity size={10} className="text-neutral-600" />
            <span className="text-[9px] font-bold text-neutral-600 uppercase tracking-[0.2em]">Diagnostic Stream</span>
          </div>
          <div className="space-y-1">
            {log.map((entry, i) => (
              <div key={i} className={`mono text-[9px] ${i === 0 ? 'text-white' : 'text-neutral-600'} flex gap-2`}>
                <span className="opacity-30">[{i}]</span>
                <span className="truncate">{entry}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemDashboard;