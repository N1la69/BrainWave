import { loading } from "../assets"

const Generating = ({ className }) => {
  return (
    <div className={`flex items-center h-[3.4rem] bg-n-8/80 px-6 rounded-[1.7rem] ${className || ''} text-base`}>
        <img className="w-5 h-5 mr-4" src={loading} alt="load"/>
        AI is Generating|
    </div>
  )
}

export default Generating