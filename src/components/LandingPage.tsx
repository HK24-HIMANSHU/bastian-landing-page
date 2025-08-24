import { EarthLock, Github } from "lucide-react";
import { Button } from "./ui/button";
import TerminalComp from "./TerminalComp";
import profileImg from '../assets/pfp-1.png';

export default function LandingPage(){
    return (
        <>
            <div className="landing flex flex-col max-w-[360px] w-[100%] items-center justify-center my-24 m-auto">
                <div className="landing__header w-100 flex flex-col gap-2 items-center">
                    <EarthLock strokeWidth={1} className="text-green-500" size={36}/>
                    <p className="text-green-500 font-medium font-mono">bastian</p>
                </div>
                <div className="landing__headline mt-6">
                    <h1 className="heading">Catch security & performance issues before they catch you.</h1>
                    <p className="description">Your VS Code extension for spotting API keys, unsafe patterns & bad code in real time.</p>
                </div>
                <div className="landing__cta flex flex-row gap-2">
                    <Button className="rounded-md px-5 py-2 font-medium bg-green-700 text-white hover:bg-green-600 hover:cursor-pointer">
                        Download VS code extension
                    </Button>
                    <Button className="rounded-md px-5 py-2 font-medium bg-neutral-800 text-white hover:bg-neutral-700 hover:cursor-pointer">
                        <Github />
                    </Button>
                </div>
                <div className="landing__terminal__wrap my-10">
                    <TerminalComp/>
                </div>
                <div className="landing__description my-10">
                    <h1 className="text-white text-2xl font-semibold text-left">What's Bastian?</h1>
                    <ul className='text-[#ffffffa3] text-left my-3 space-y-3'>
                        <li>
                            1. Prevents secret leaks - flags exposed API keys and sensitive data instantly
                        </li>
                        <li>
                            2. Catches unsafe patterns - detects risky code practices in real time.
                        </li>
                        <li>
                            3. Boosts code quality - ensures cleaner, safer code as you type.
                        </li>
                    </ul>
                </div>
                <div className="landing__contact_info">
                    <div className="landing__contact_info-card flex flex-col justify-between w-80 p-4 rotate-2 shadow-lg shadow-gray-800/10 rounded-md h-50 bg-[#262627]">
                        <div className="landing-pg flex justify-between items-start">
                            <div className="wrap flex items-center gap-1">
                                <EarthLock strokeWidth={1} className="text-[#ffffffa3]" size={16}/>
                                <p className="text-[#ffffffa3] text-sm">bastian</p>
                            </div>
                            <img className="rounded-md rotate-2" src={profileImg} width={80} height={80}/>
                        </div>
                        <div className="wrap flex flex-col">
                            <p className='text-[#ffffffa3] text-sm'>Email</p>
                            <p className='text-white text-md'>itshimanshuk2002@gmail.com</p>
                        </div>
                    </div>
                </div>
                <footer className="text-center text-sm text-gray-500 mt-12">
                    Inspired by <a href="https://devdifferent.io" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300">
                        devdifferent.io
                    </a>
                </footer>
            </div>
        </>
    );
}
