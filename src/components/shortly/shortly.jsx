import "./shortly.sass"
import ShortlyCards from "../shortly_card/shortly_card"

// const shortly_podcasts = [
//     {title:"Title 1", description:"description..."}
// ]

function Shortly() {
    return (
        <section className="shortly">
            <h1>Shortly</h1>
            
            <div className="wrapper">
                <ShortlyCards title="Hungria Hip..." src="https://i.scdn.co/image/9c5f3500ef0bc204e076a448eed170222189b3dd"/>
                <ShortlyCards title="Cold Play" src="https://th.bing.com/th/id/R.258d070a9fa732e71751ff369a345fab?rik=XzBpnGr%2fht2Nrw&riu=http%3a%2f%2ftanakamusic.com%2fwp-content%2fuploads%2f2010%2f12%2fColdplay.jpg&ehk=n6FB9OIdCLaTy8XKqlU%2fRFkWIwsMqqgZKxfOtRUwFm8%3d&risl=&pid=ImgRaw&r=0"/>
                <ShortlyCards title="Marshimellow" src="https://th.bing.com/th/id/OIP.M0ungtGODH6UCaJmiqqvcAHaHa?pid=ImgDet&rs=1"/>
                <ShortlyCards title="David Guetta" src="https://th.bing.com/th/id/R.cb7a6a070770d4664cbcd4c6e4c42f4f?rik=V%2fjH4MHR%2fFdm9g&pid=ImgRaw&r=0"/>
                <ShortlyCards title="Eminem" src="https://th.bing.com/th/id/R.66fb1d8745fcff2705cb82db17400101?rik=52gOcQvmSHwISw&riu=http%3a%2f%2fwprapradar.s3.amazonaws.com%2fwp-content%2fuploads%2f2010%2f04%2frecoveryapprovedcrop.jpg&ehk=Fk2QAUDaOtcBzQ%2fvSdRP7CWdTAw3pToMUHQ6Y3wkyu0%3d&risl=&pid=ImgRaw&r=0"/>
            </div>
        </section>
    )
}

export default Shortly;