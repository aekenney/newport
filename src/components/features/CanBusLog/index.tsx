import React, { useState, useEffect, useRef } from 'react';

interface LogEntry {
  id: string;
  timestamp: string;
  canId: string;
  data: string;
  dlc: number;
}

const CanBusLog: React.FC = () => {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const generateHex = (len: number) => {
    return Array.from({ length: len }, () => 
      Math.floor(Math.random() * 256).toString(16).toUpperCase().padStart(2, '0')
    ).join(' ');
  };

  const generateId = () => {
    const ids = ['0x1A0', '0x2B4', '0x4F2', '0x3D1', '0x7E8', '0x0C9'];
    return ids[Math.floor(Math.random() * ids.length)];
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const newEntry: LogEntry = {
        id: Math.random().toString(36).substr(2, 9),
        timestamp: (performance.now() / 1000).toFixed(4),
        canId: generateId(),
        data: generateHex(8),
        dlc: 8
      };

      setLogs(prev => [...prev.slice(-20), newEntry]);
    }, 150);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div className="bg-black border border-white/10 rounded-xl overflow-hidden shadow-2xl">
      <div className="px-4 py-2 border-b border-white/5 bg-neutral-900/50 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
          <span className="text-[10px] font-bold mono text-neutral-400 uppercase tracking-widest">Live_Bus_Log / CAN0</span>
        </div>
        <span className="text-[9px] mono text-neutral-600">BAUD: 500kbps</span>
      </div>
      <div 
        ref={scrollRef}
        className="h-48 p-4 font-mono text-[10px] space-y-1 can-bus-scroll overflow-y-auto"
      >
        <div className="text-neutral-600 mb-2 pb-2 border-b border-white/5 grid grid-cols-4 gap-4">
          <span>TIMESTAMP</span>
          <span>ID</span>
          <span>DLC</span>
          <span>DATA_BYTES</span>
        </div>
        {logs.map(log => (
          <div key={log.id} className="grid grid-cols-4 gap-4 text-neutral-400 hover:text-white transition-colors">
            <span className="text-neutral-600">[{log.timestamp}]</span>
            <span className="text-blue-400">{log.canId}</span>
            <span>{log.dlc}</span>
            <span className="truncate">{log.data}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CanBusLog;