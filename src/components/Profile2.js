import image from '../assets/image.png';        // image是一個函式名稱
export default function Profile2() {
    return(
        <Avatar
            person={{name: 'benz f1',imageID: '1'}}
            property={{src: image, alt: 'benz f1'}}
            size={200}
        />      

    );
}
function Avatar({person,size, property}) {
    return(
        <div>
            <figure>
                <img 
                    src = {property.src}
                    alt="gt3 rs"
                    width={size}
                />
                <figcaption>
                    name: {person.name}<br/>
                    imageID: {person.imageID}<br/>
                </figcaption>
            </figure>
            
        </div>);
}