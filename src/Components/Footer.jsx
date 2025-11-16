import { X } from "lucide-react"

export default function Footer() {
  return (
    <div className="flex-center flex-col gap-8 p-20 pb-10 w-full text-xs font-light">
      <p className="tab">JOIN OUR NEWSLETTER</p>

      <ul className="flex-center gap-4 flex-row">
        <li className="tab">TIKTOK</li>
        <li className="tab">INSTAGRAM</li>
        <li className="tab">FACEBOOK</li>
        <li><X size={16} strokeWidth={1} /></li>
        <li className="tab">PINTEREST</li>
        <li className="tab">YOUTUBE</li>
        <li className="tab">SPOTIFY</li>
      </ul>

      <ul className="flex-center gap-4 flex-row">
        <li className="tab">COOKIES SETTING</li>
        <li className="tab">PRIVACY AND COOKIES POLICY</li>
        <li className="tab">TERMS OF USE</li>
      </ul>
    </div>
  )
}