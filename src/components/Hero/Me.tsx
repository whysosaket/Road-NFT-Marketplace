
const linkStyle="hover:text-p1 cursor-pointer";

const Me = () => {
  return (
    <div className="flex gap-6 mb-6">
        <a href="mailto:saketaryan2002@gmail.com" className={linkStyle}>EM</a>
        <a href="https://x.com/whysosaket" target="_blank" className={linkStyle}>TW</a>
        <a href="https://resume.saketaryan.xyz/" target="_blank" className={linkStyle}>PT</a>
        <a href="https://drive.google.com/drive/folders/1X5QB6_CQgtkQCgt_sRsghn4NZH9aGQat?usp=sharing" target="_blank" className={linkStyle}>RS</a>
    </div>
  )
}

export default Me