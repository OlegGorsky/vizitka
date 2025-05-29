import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { logger } from '../../utils/logger';

export function AboutPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  
  const videoUrl = 'https://files.salebot.pro/uploads/file_item/file/44501/video_2025-02-26_21-46-41.mp4';
  const posterUrl = 'https://files.salebot.pro/uploads/file_item/file/44501/photo_2023-05-10_20-25-41.jpg';

  useEffect(() => {
    logger.info('Video', 'Initializing video player');
    const video = videoRef.current;
    if (video) {
      const handleLoadedData = () => {
        logger.info('Video', 'Video loaded successfully');
        setIsLoading(false);
      };
      const handleError = (e: Event) => {
        logger.error('Video', 'Error loading video', e);
        setError(true);
      };
      const handlePlay = () => {
        logger.info('Video', 'Video playback started');
        setIsPlaying(true);
      };
      const handlePause = () => {
        logger.info('Video', 'Video playback paused');
        setIsPlaying(false);
      };

      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('error', handleError);
      video.addEventListener('play', handlePlay);
      video.addEventListener('pause', handlePause);

      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('error', handleError);
        video.removeEventListener('play', handlePlay);
        video.removeEventListener('pause', handlePause);
      };
    }
  }, []);

  const togglePlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      if (video.paused) {
        logger.info('Video', 'Attempting to play video');
        await video.play();
      } else {
        logger.info('Video', 'Pausing video');
        video.pause();
      }
    } catch (err) {
      logger.error('Video', 'Error toggling video playback', err);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    
    video.muted = !video.muted;
    setIsMuted(video.muted);
    logger.info('Video', `Audio ${video.muted ? 'muted' : 'unmuted'}`);
  };

  return (
    <div className="px-4 py-6">
      <h2 className="text-xl font-bold text-white mb-4">Обо мне</h2>
      <div className="rounded-2xl overflow-hidden shadow-lg bg-gray-800 relative">
        <div className="aspect-video bg-gray-900 relative">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
              <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            poster={posterUrl}
            playsInline
            muted={isMuted}
            loop
            preload="auto"
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
            <div className="flex items-center gap-4">
              <button
                onClick={togglePlay}
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                type="button"
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5 text-white" />
                ) : (
                  <Play className="w-5 h-5 text-white" />
                )}
              </button>
              <button
                onClick={toggleMute}
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                type="button"
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5 text-white" />
                ) : (
                  <Volume2 className="w-5 h-5 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 space-y-4">
        <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
          <p className="text-gray-300 leading-relaxed">
            Привет! Я рад приветствовать вас на моей странице. Здесь вы можете узнать больше о моем опыте и профессиональных навыках. Я специализируюсь на создании эффективных решений для бизнеса и всегда открыт к новым интересным проектам.
          </p>
        </div>
        
        <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-3">Мои навыки</h3>
          <div className="grid grid-cols-2 gap-2">
            {['React', 'Node.js', 'TypeScript', 'UI/UX', 'API Design', 'DevOps'].map((skill) => (
              <div key={skill} className="px-3 py-2 bg-gray-700/50 rounded-lg text-gray-300 text-sm">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}