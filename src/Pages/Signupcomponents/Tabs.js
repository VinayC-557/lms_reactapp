import React, { useState } from 'react';
import './Tabs.css';
import VideoPlayer from './VideoPlayer';

function Tabs({ videoUrl, notes, resources }) {
  const [activeTab, setActiveTab] = useState('video');

  return (
    <div className="tabs">
      <div className="tab-headers">
        <button onClick={() => setActiveTab('video')} className={activeTab === 'video' ? 'active' : ''}>Video</button>
        <button onClick={() => setActiveTab('notes')} className={activeTab === 'notes' ? 'active' : ''}>Notes</button>
        <button onClick={() => setActiveTab('resources')} className={activeTab === 'resources' ? 'active' : ''}>Resources</button>
      </div>
      <div className="tab-content">
        {activeTab === 'video' && <VideoPlayer videoUrl={videoUrl} />}
        {activeTab === 'notes' && <div className="notes">{notes}</div>}
        {activeTab === 'resources' && <div className="resources">{resources}</div>}
      </div>
    </div>
  );
}

export default Tabs;
