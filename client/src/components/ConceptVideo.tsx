import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Play, Pause, RotateCcw, FileText, Sparkles, CheckCircle2 } from 'lucide-react';
import { CALENDLY_LINK } from '@/data/siteData';

interface Scene {
  id: string;
  startSec: number;
  endSec: number;
  label: string;
  image: string;
  title: string;
  caption: string;
  tag: string;
}

const SCENES: Scene[] = [
  {
    id: 'scene-1',
    startSec: 0,
    endSec: 13,
    label: 'The Challenge',
    image: '/screenshots/01-welcome.png',
    title: 'A Safe Place for Friendship and Dating',
    caption: 'Most adults want someone to share life with. But for autistic adults and adults with I/DD, the usual routes are closed or unsafe.',
    tag: 'Documented Need · 95% Demand'
  },
  {
    id: 'scene-2',
    startSec: 13,
    endSec: 28,
    label: 'The Model',
    image: '/screenshots/03-guided-home.png',
    title: 'Two Halves, One Trained Coach',
    caption: "Togetha is a statewide framework connecting trained, paid dating coaches, in-person matching events, and a calm, accessible digital space.",
    tag: 'Guided Mode · Autonomy First'
  },
  {
    id: 'scene-3',
    startSec: 28,
    endSec: 44,
    label: 'Autonomy & Pacing',
    image: '/screenshots/08-safety-tip-in-chat.png',
    title: 'In-Chat Safety: Warn, Never Block',
    caption: "Members set the pace: one profile at a time, ten a day. In-chat safety tips coach rather than control, and agency partners see counts, never private messages.",
    tag: 'Pattern Safeguards · Co-Pilot Support'
  },
  {
    id: 'scene-4',
    startSec: 44,
    endSec: 62,
    label: 'The Invitation',
    image: '/screenshots/18-agency-overview.png',
    title: 'Proven in Pilots · Preparing for Volunteer Testing',
    caption: 'Backed by Massachusetts partners, proven in early pilots, and being prepared for a supervised volunteer test. See how connection begins.',
    tag: 'Founding Partners · Book Walkthrough'
  }
];

export const ConceptVideo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(60);
  const [showTranscript, setShowTranscript] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Determine active scene based on currentTime
  const activeSceneIndex = SCENES.findIndex(
    (s) => currentTime >= s.startSec && currentTime < s.endSec
  );
  const activeScene = activeSceneIndex !== -1 ? SCENES[activeSceneIndex] : SCENES[0];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleLoadedMetadata = () => {
      if (audio.duration && !isNaN(audio.duration)) {
        setDuration(audio.duration);
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn('Playback blocked or failed:', err);
      });
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const restartVideo = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = 0;
    audio.play().then(() => setIsPlaying(true));
  };

  return (
    <div className="w-full rounded-2xl overflow-hidden glass-panel border border-white/15 shadow-2xl relative glow-purple">
      {/* Hidden HTML5 Audio Element running the AI Voiceover */}
      <audio
        ref={audioRef}
        src="/audio/togetha-concept-narration.wav"
        preload="metadata"
      />

      {/* Main Video Presentation Display */}
      <div className="relative aspect-[16/9] w-full bg-slate-950 overflow-hidden group">
        {/* Animated Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#6F47C6]/30 via-[#0D9488]/20 to-transparent mix-blend-screen pointer-events-none" />

        {/* Visual Scene Composition */}
        <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-8">
          <div className="relative max-w-4xl w-full h-full flex flex-col md:flex-row items-center justify-center gap-6">
            {/* Labeled Demo Screen Container with Smooth Transition */}
            <div className="relative w-full md:w-1/2 h-full flex items-center justify-center">
              <div className="relative max-h-full rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl bg-black/60 p-1">
                <img
                  src={activeScene.image}
                  alt={activeScene.title}
                  className="max-h-[380px] w-auto object-contain rounded-xl transition-all duration-700 ease-out transform group-hover:scale-[1.01]"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-[10px] font-mono tracking-wider uppercase text-togetha-purpleLight border border-white/10">
                  {activeScene.tag}
                </div>
              </div>
            </div>

            {/* Live Contextual Caption Card */}
            <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4 text-left z-10">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-tealLight bg-brand-card/80 border border-brand-teal/30 px-3 py-1 rounded-full w-fit">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{activeScene.label} · Scene {activeSceneIndex + 1} of {SCENES.length}</span>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight leading-tight">
                {activeScene.title}
              </h3>

              <div className="p-4 rounded-xl bg-slate-900/90 border border-white/10 backdrop-blur-md">
                <p className="text-sm sm:text-base text-slate-200 font-serif leading-relaxed italic">
                  "{activeScene.caption}"
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-2 text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal" />
                  Voice narration generated by built-in AI speech engine
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Video Overlay Controls */}
        <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/95 via-black/70 to-transparent flex flex-col gap-2">
          {/* Progress Bar */}
          <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden cursor-pointer"
               onClick={(e) => {
                 const rect = e.currentTarget.getBoundingClientRect();
                 const clickPos = (e.clientX - rect.left) / rect.width;
                 if (audioRef.current) {
                   audioRef.current.currentTime = clickPos * duration;
                 }
               }}>
            <div
              className="bg-gradient-to-r from-togetha-purple to-brand-teal h-full transition-all duration-200"
              style={{ width: `${(currentTime / (duration || 60)) * 100}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-xs text-slate-300 pt-1">
            <div className="flex items-center gap-3">
              <button
                onClick={togglePlay}
                className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition-colors"
                aria-label={isPlaying ? "Pause voiceover video" : "Play voiceover video"}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
              </button>

              <button
                onClick={restartVideo}
                className="p-1.5 hover:text-white transition-colors"
                title="Restart"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={toggleMute}
                className="p-1.5 hover:text-white transition-colors"
                title={isMuted ? "Unmute narration" : "Mute narration"}
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
              </button>

              <span className="font-mono text-[11px] text-slate-400">
                {Math.floor(currentTime)}s / {Math.floor(duration || 60)}s
              </span>
            </div>

            {/* Quick CTAs */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowTranscript(!showTranscript)}
                className="text-xs hover:text-white flex items-center gap-1 transition-colors underline"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>{showTranscript ? 'Hide Script' : 'View Script'}</span>
              </button>

              <a
                href={CALENDLY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex px-3 py-1 rounded-md bg-brand-orange hover:bg-brand-orangeHover text-white font-semibold text-xs transition-colors"
              >
                Book Walkthrough
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Transcript Accordion */}
      {showTranscript && (
        <div className="p-6 bg-[#0E1524] border-t border-white/10 text-sm space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold text-white flex items-center gap-2">
              <FileText className="w-4 h-4 text-brand-teal" />
              <span>Full Concept Video Voiceover Script</span>
            </h4>
            <span className="text-xs font-mono text-slate-400">Voice: Charon (American English, Documentary style)</span>
          </div>
          <div className="space-y-3 text-slate-300 font-serif leading-relaxed text-sm bg-black/40 p-4 rounded-xl border border-white/5">
            <p>
              "Most adults want someone to share life with. But for autistic adults and adults with intellectual and developmental disabilities, the usual routes are closed or unsafe."
            </p>
            <p>
              "Togetha changes that. It isn't just an app. It is a statewide framework connecting trained dating coaches, supported in-person events, and a calm, accessible digital space built for friendship and dating."
            </p>
            <p>
              "Members set the pace: one person at a time, their own screen style, and trusted supporters who help only as much as the member allows. In-chat safety tips coach rather than control, and agency partners see totals, never private conversations."
            </p>
            <p>
              "Backed by Massachusetts partners, proven in early pilots, and being prepared for a supervised volunteer test. Connection begins here. Book a walkthrough of Togetha today."
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
