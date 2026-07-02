'use client';

import { useEffect, useState } from 'react';

// ✅ 배너 설정 — enabled true / false
const BANNER = {
  enabled: true,
  changes: "개별소비세 5% 반영",
  date: "Jul 2, 2026",
  startDate: new Date('2026-07-02'),
  maxDays: 7,
  maxVisits: 3,
};

export default function AnnouncementBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!BANNER.enabled) return;

    const expiry = new Date(BANNER.startDate);
    expiry.setDate(expiry.getDate() + BANNER.maxDays);
    if (new Date() > expiry) return;

    const count = parseInt(localStorage.getItem('bannerVisitCount') || '0', 10) + 1;
    localStorage.setItem('bannerVisitCount', String(count));

    if (count <= BANNER.maxVisits) setVisible(true);
  }, []);

  useEffect(() => {
    document.body.style.paddingTop = visible ? '30px' : '';
    return () => { document.body.style.paddingTop = ''; };
  }, [visible]);

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      backgroundColor: '#1c69d4',
      color: '#ffffff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '6px 16px',
      fontSize: '12px',
      letterSpacing: '0.05em',
      zIndex: 1000,
      boxSizing: 'border-box',
    }}>
      <span style={{
        backgroundColor: 'rgba(255,255,255,0.25)',
        borderRadius: '4px',
        padding: '1px 6px',
        fontSize: '10px',
        fontWeight: 700,
        letterSpacing: '0.08em',
        marginRight: '10px',
      }}>
        NEW
      </span>
      어프로치북 업데이트. {BANNER.changes} · {BANNER.date}
      <button
        onClick={() => setVisible(false)}
        style={{
          position: 'absolute',
          right: '16px',
          background: 'none',
          border: 'none',
          color: 'rgba(255,255,255,0.7)',
          fontSize: '16px',
          cursor: 'pointer',
          lineHeight: 1,
          padding: 0,
        }}
        aria-label="닫기"
      >
        ×
      </button>
    </div>
  );
}
