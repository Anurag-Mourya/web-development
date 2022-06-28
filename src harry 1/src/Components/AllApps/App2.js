// import logo from './logo.svg';
import Navbar from '../Navbar';
import TextForm from '../TextForm';

//Note: to include the bootstrap in react change class into className, href="#" into href="/", must be close the tags <br> into <br/>, <input> into <input/>

export default function App() {

    return (
        <>
        {/* Chang the data using props... */}
            <Navbar Title = 'TextUtilities' MyHome = 'MeraHome' About = "MyAbout"/>

            {/* for default props.. */}
            {/* <Navbar/> */}
            <TextForm heading='Enter the text here..'/>
        </>
    );
}

// export default App;
