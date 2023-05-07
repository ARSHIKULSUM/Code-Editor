import Editor from '../molecules/editor';
import Browser from '../molecules/browser';
import Navigationbar from '../molecules/navigationbar';

export default function MainFile(){
    return(
        <>
        <div>
            <Navigationbar />
        </div>
    <div>
      <Editor />
    </div>
    <div>
      <Browser />
    </div>
    </>
    )
}