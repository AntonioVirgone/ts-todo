import { EventEmitter } from "stream";

export class EmitterManager {
  private static instance: EmitterManager;

  emitter = new EventEmitter();

  private constructor() {
    // Listener che esegue una funzione quando l'evento viene emesso
    this.emitter.on("expire", (param: string) => {
      console.log("recovered token");
    });
  }

  public static getInstance(): EmitterManager {
    if (!EmitterManager.instance) {
      EmitterManager.instance = new EmitterManager();
    }
    return EmitterManager.instance;
  }

  expire(timeout: number, extraParam: string) {
    setTimeout(() => {
      this.emitter.emit("expire", extraParam);
    }, timeout);
  }
}
