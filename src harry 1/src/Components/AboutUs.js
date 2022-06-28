import React from "react";
import { useState } from "react";

export default function AboutUs() {

    const [mystyle, setMyStyle] = useState({
        backgroundColor: 'white',
        color: 'black'
    });

    const[btnText, setbtnText] = useState('Enable Dark Mode')

    const toggleDark = () => {

        if (mystyle.color === 'black') {
            setMyStyle({
                color: 'white',
                backgroundColor: 'black'
            })
            setbtnText('Enable light Mode');
        } else {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            });
            setbtnText('Disable dark Mode');
        }
    }
    return (
        <div>
            <div className="container" style={mystyle}>
                <h1 >This is the About Us Page</h1>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum perspiciatis neque voluptatibus vero, similique, libero sit doloremque iste necessitatibus dolorum tenetur, dignissimos provident. Iure quidem nihil tenetur labore unde et possimus corporis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem amet totam quo consequatur dignissimos, aut dicta culpa architecto reprehenderit ducimus animi fuga quibusdam commodi sunt voluptatum autem neque error accusantium, ipsam, aliquid et? Cumque mollitia, aliquam similique provident maxime cupiditate et ab nisi adipisci soluta nostrum itaque tempore recusandae, architecto aspernatur alias odio voluptate reiciendis. Possimus temporibus, saepe recusandae iure quibusdam ex animi illum. Dolorem sed sit laboriosam dicta possimus eaque sunt voluptate perspiciatis quasi eum non aliquam, maxime sapiente animi beatae, distinctio rerum temporibus laudantium dolor ipsam voluptas dolorum? Maxime nemo itaque minima voluptatum laudantium omnis suscipit quam consectetur tempore dolores, quidem dolorum reiciendis tenetur perferendis possimus. Officia expedita perferendis sint. Voluptates similique, dolorem tempora excepturi saepe dicta debitis. Earum omnis id sequi soluta eos voluptatem quos corrupti quaerat hic sed recusandae rem optio, at incidunt assumenda commodi, natus temporibus corporis maxime nam voluptatibus excepturi sit consectetur totam. Temporibus sequi ullam officia, perferendis debitis magnam, ad reiciendis, aut aliquid iusto accusantium voluptatum! Natus accusantium esse magni ut explicabo animi voluptate illo est nemo omnis eveniet consequuntur qui fugit sed voluptatum placeat consectetur fuga alias, aliquam repellendus et facilis ipsam? Aliquid, dolore autem. Voluptatibus labore eaque eligendi expedita a culpa eius, odio repellat. Maiores quidem sequi sapiente cum? Voluptatem hic repudiandae dolor iusto neque numquam harum enim, fugit asperiores iste atque eaque minus nihil perferendis. Nemo voluptas illo impedit, nostrum voluptatibus a.</p>

                <button className="btn btn-outline-success btn-secondary" onClick={toggleDark} style={mystyle}>{btnText}</button>

            </div>

        </div>
    )

}

// export default darkMode;