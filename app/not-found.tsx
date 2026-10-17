import React from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { Compass, ArrowLeft, AlertTriangle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4">
      <div className="max-w-md w-full p-8 rounded-lg bg-[#0C1017] border border-white/10 text-center space-y-6 shadow-2xl relative overflow-hidden">
        <div className="w-12 h-12 rounded-full bg-asme-red/10 text-asme-red flex items-center justify-center mx-auto border border-asme-red/20">
          <AlertTriangle className="w-6 h-6" />
        </div>

        <div className="space-y-2">
          <div className="font-mono text-xs text-asme-red uppercase tracking-widest">
            ERROR 404 // VECTOR DISCONNECTED
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-white uppercase tracking-tight">
            Endpoint Not Found
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            The requested technical dossier or navigational module does not exist
            within the active ASME GECT digital register.
          </p>
        </div>

        <div className="p-3 rounded bg-white/[0.02] border border-white/[0.06] font-mono text-xs text-muted-foreground">
          SYS.TELEMETRY: STATUS 404 • GECT NODE
        </div>

        <div className="pt-2 flex justify-center">
          <Button href="/" size="md" variant="primary">
            <ArrowLeft className="w-4 h-4 mr-1" />
            <span>Return to Telemetry Home</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
