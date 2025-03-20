export default function Profile() {
    return(
        <Avatar
            person={{name: 'vespa',imageID: '2'}}
            size={200}
        />      

    );
}
function Avatar({person,size}) {
    return(
        <div>
            <figure>
                <img 
                    src="https://tinyurl.com/3vmn9ps8" 
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