import type { Tweaks, FontKey, AtmosKey, PaletteKey } from '../../lib/tweaks';

interface TweaksPanelProps {
  on: boolean;
  tweaks: Tweaks;
  setTweaks: (t: Tweaks) => void;
}

interface TweakOption<T extends string> {
  val: T;
  label: string;
}

interface RowProps<T extends string> {
  label: string;
  keyName: keyof Tweaks;
  options: TweakOption<T>[];
  tweaks: Tweaks;
  setT: (key: keyof Tweaks, val: string) => void;
}

function TweakRow<T extends string>({
  label,
  keyName,
  options,
  tweaks,
  setT,
}: RowProps<T>) {
  return (
    <>
      <label>{label}</label>
      <div className="tweak-opts">
        {options.map((o) => (
          <button
            key={o.val}
            className={tweaks[keyName] === o.val ? 'on' : ''}
            onClick={() => setT(keyName, o.val)}
          >
            {o.label}
          </button>
        ))}
      </div>
    </>
  );
}

/** Developer tweaks panel — toggled by postMessage from the host frame */
export function TweaksPanel({ on, tweaks, setTweaks }: TweaksPanelProps) {
  const setT = (key: keyof Tweaks, val: string) => {
    const next = { ...tweaks, [key]: val } as Tweaks;
    setTweaks(next);
    window.parent.postMessage(
      { type: '__edit_mode_set_keys', edits: { [key]: val } },
      '*',
    );
  };

  return (
    <div className={`tweaks ${on ? 'on' : ''}`}>
      <h4>Tweaks</h4>
      <TweakRow<FontKey>
        label="Fonte dos títulos"
        keyName="font"
        tweaks={tweaks}
        setT={setT}
        options={[
          { val: 'pirate', label: 'Orbitron (tech)' },
          { val: 'racing', label: 'Racing Sans One' },
          { val: 'bebas', label: 'Bebas Neue' },
          { val: 'teko', label: 'Teko' },
        ]}
      />
      <TweakRow<AtmosKey>
        label="Atmosfera (brilho)"
        keyName="atmos"
        tweaks={tweaks}
        setT={setT}
        options={[
          { val: 'on', label: 'Ativa' },
          { val: 'off', label: 'Plana' },
        ]}
      />
      <TweakRow<PaletteKey>
        label="Paleta"
        keyName="palette"
        tweaks={tweaks}
        setT={setT}
        options={[
          { val: 'orange', label: 'Laranja HT' },
          { val: 'amber', label: 'Âmbar' },
          { val: 'red', label: 'Vermelho' },
        ]}
      />
      <p style={{ fontSize: 11, color: 'var(--fg-mute)', marginTop: 16, lineHeight: 1.5 }}>
        As alterações são salvas automaticamente. Ative/desative pelo botão "Tweaks" na barra do topo.
      </p>
    </div>
  );
}
