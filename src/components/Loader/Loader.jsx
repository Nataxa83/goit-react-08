import { ThreeCircles } from "react-loader-spinner"
import css from "./Loader.module.css"

const Loader = () => {
  return (
    <div className={css.loader}> <ThreeCircles
    visible={true}
    height="50"
    width="50"
    color="coral"
    ariaLabel="three-circles-loading"
    wrapperStyle={{}}
    wrapperClass=""
    /></div>
   
  )
}

export default Loader