import React from 'react'
import LakeVideo from '../lake.mp4'
import './HeroSection.css'
import { NotesTable } from './NotesTable';

export const HeroSection = () => {
    return (
        <div className="hero-container">
            <video src={LakeVideo} autoPlay loop muted/>
            <div>
            <NotesTable />
            </div>
        </div>
    )
}