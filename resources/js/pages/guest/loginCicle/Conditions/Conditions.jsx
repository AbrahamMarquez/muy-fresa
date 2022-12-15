import React, { useEffect, useState } from "react";
import './Conditions.scss'
import Button from "../../../../components/atoms/Button/Button";
import { useNavigate } from "react-router-dom";


const Conditions = () => {

    const [c1,setC1] = useState(null)
    const [c2,setC2] = useState(null)
    const navigate = useNavigate();
 
const nextPage =()=>
{
    const c1id = document.getElementById('c1')
    const c2id = document.getElementById('c2')
    if(c1==true)
    {
        c1id.style.color = "black";
    }
    else{
        c1id.style.color = "red";
    }
    
    if(c2==true)
    {
        c2id.style.color = "black";
    }
    else{
        c2id.style.color = "red";
    }
    if(c1&&c2)
    {
        navigate('/')
    }
}

    return (
        <>
            <div className="generalBackground conditions-container">
                <div className="Conditions">
                    <div className="title">Términos y condiciones</div>
                    <div className="sub-title">Para poder crear tu cuenta es necesario que aceptes nuestras políticas</div>
                    <p style={{ marginBottom: '15px' }}>Once upon a time, a mouse, a bird, and a sausage, entered into partnership and set up house together. For a long time all went well; they lived in great comfort, and prospered so far as to be able to add considerably to their stores. The bird’s duty was to fly daily into the wood and bring in fuel; the mouse fetched the water, and the sausage saw to the cooking.</p>
                    <p>When Dorothy was left alone she began to feel hungry. So she went to the cupboard and cut herself some bread, which she spread with butter. She gave some to Toto, and taking a pail from the shelf she carried it down to the little brook and filled it with clear, sparkling water. Toto ran over to the trees and began to bark at the birds sitting there. Dorothy went to get him, and saw such delicious fruit hanging from the branches that she gathered some of it, finding it just what she wanted to help out her breakfast.</p>
                    <p>Time passed on again, and the youngest son too wished to set out into the wide world to seek for the golden bird; but his father would not listen to it for a long while, for he was very fond of his son, and was afraid that some ill luck might happen to him also, and prevent his coming back. However, at last it was agreed he should go, for he would not rest at home; and as he came to the wood, he met the fox, and heard the same good counsel. But he was thankful to the fox, and did not attempt his life as his brothers had done; so the fox said, ‘Sit upon my tail, and you will travel faster.’ So he sat down, and the fox began to run, and away they went over stock and stone so quick that their hair whistled in the wind.</p>
                    <p style={{ marginBottom: '46px' }}>A certain king had a beautiful garden, and in the garden stood a tree which bore golden apples. These apples were always counted, and about the time when they began to grow ripe it was found that every night one of them was gone. The king became very angry at this, and ordered the gardener to keep watch all night under the tree. The gardener set his eldest son to watch; but about twelve o’clock he fell asleep, and in the morning another of the apples was missing. Then the second son was ordered to watch; and at midnight he too fell asleep, and in the morning another apple was gone. Then the third son offered to keep watch; but the gardener at first would not let him, for fear some harm should come to him: however, at last he consented, and the young man laid himself under the tree to watch.</p>
                    <div className="title" style={{ marginBottom: '40px' }}>Políticas de privacidad</div>
                    <p>A certain cat had made the acquaintance of a mouse, and had said so much to her about the great love and friendship she felt for her, that at length the mouse agreed that they should live and keep house together. ‘But we must make a provision for winter, or else we shall suffer from hunger,’ said the cat; ‘and you, little mouse, cannot venture everywhere, or you will be caught in a trap some day.’ The good advice was followed, and a pot of fat was bought, but they did not know where to put it. At length, after much consideration, the cat said: ‘I know no place where it will be better stored up than in the church, for no one dares take anything away from there.</p>
                    <p>The Scarecrow found a tree full of nuts and filled Dorothy's basket with them, so that she would not be hungry for a long time. She thought this was very kind and thoughtful of the Scarecrow, but she laughed heartily at the awkward way in which the poor creature picked up the nuts. His padded hands were so clumsy and the nuts were so small that he dropped almost as many as he put in the basket. But the Scarecrow did not mind how long it took him to fill the basket.</p>
                    <p>For three days Dorothy heard nothing from Oz. These were sad days for the little girl, although her friends were all quite happy and contented. The Scarecrow told them there were wonderful thoughts in his head; but he would not say what they were because he knew no one could understand them but himself. When the Tin Woodman walked about he felt his heart rattling around in his breast; and he told Dorothy he had discovered it to be a kinder and more tender heart than the one he had owned when he was made of flesh. The Lion declared he was afraid of nothing on earth, and would gladly face an army or a dozen of the fierce Kalidahs.</p>
                    <div className="selects-container" style={{marginTop:'44px'}}>
                        <input  onChange={(e)=>{setC1(e.target.checked)}}  type={'checkbox'}></input><label id='c1'>Acepto los términos y condiciones</label>
                    </div>
                    <div className="selects-container" style={{ marginBottom: '80px' }}>
                        <input onChange={(e)=>{setC2(e.target.checked)}} type={'checkbox'}></input><label  id='c2'>Acepto los términos y condiciones</label>
                    </div>
                    <div className="buttons-container">
                        <div className="mr-31">
                            <Button className={"button"}  onClick={() => { navigate('/register-code') }} >Volver</Button>
                        </div>
                        <Button className={"button"} onClick={() => { nextPage() }} color={'red'}>Enviar código</Button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Conditions