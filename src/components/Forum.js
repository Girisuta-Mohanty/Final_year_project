import React from 'react'
import Base from './Base';
const Forum = () => {
    const forumWidgetURL = 'http://pub12.bravenet.com/forum/static/show.php?usernum=1014563337&frmid=11762&msgid=0';

    const iframeStyle = {
      width: '100%',
      height: '400px', // adjust to your desired height
      border: 'none'
    };
  return (
    <Base>
         <div>
         <iframe src={forumWidgetURL} style={iframeStyle}></iframe>
    </div>
    </Base>
  )
}

export default Forum
