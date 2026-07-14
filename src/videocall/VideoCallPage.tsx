import React, { useState } from 'react';
import { Phone, PhoneOff, Mic, MicOff, Video, VideoOff, Monitor } from 'lucide-react';


export const VideoCallPage: React.FC = () => {
    const [callActive, setCallActive] = useState(false);
    const [micOn, setMicOn] = useState(true);
    const [videoOn, setVideoOn] = useState(true);


    return (
        <div className="space-y-6 animate-fade-in">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Video Call</h1>
                <p className="text-gray-600">Connect with investers face to face</p>
            </div>


            <div className="relative bg-gray-900 rounded-xl overflow-hidden" style={{ height: '400px' }}>


                <div className="w-full h-full flex items-center justify-center">
                    {callActive ? (
                        <div className="text-white text-center">
                            <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl font-bold">MR</span>
                            </div>
                            <p className="text-lg">Michael Rodriguez</p>
                            <p className="text-sm text-gray-400">Connected</p>
                        </div>
                    ) : (
                        <div className="text-white text-center">
                            <p className="text-xl">Call not started</p>
                            <p className="text-gray-400 mt-2">Click start call to begin</p>
                        </div>
                    )}
                </div>

                <div className="absolute bottom-4 right-4 w-32 h-24 bg-gray-700 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">You</span>
                </div>
            </div>

            <div className="flex items-center justify-center gap-4">
                <button
                    onClick={() => setMicOn(!micOn)}
                    className={`p-4 rounded-full ${micOn ? 'bg-gray-200' : 'bg-red-500'}`}>
                    {micOn ? <Mic size={20} /> : <MicOff size={20} className="text-white" />}
                </button>


                <button
                    onClick={() => setCallActive(!callActive)}
                    className={`p-5 rounded-full ${callActive ? 'bg-red-500' : 'bg-green-500'}`}>
                    {callActive ?
                        <PhoneOff size={24} className="text-white" /> :
                        <Phone size={24} className="text-white" />}

                </button>



                <button
                    onClick={() => setVideoOn(!videoOn)}
                    className={`p-4 rounded-full ${videoOn ? 'bg-gray-200' : 'bg-red-500'}`}>
                    {videoOn ? <Video size={20} /> : <VideoOff size={20} className="text-white" />}

                </button>

                <button className="p-4 rounded-full bg-gray-200">
                    <Monitor size={20} />
                </button>

            </div>
        </div>
    );
};