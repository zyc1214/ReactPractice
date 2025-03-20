export default function Profile() {
    return(
        <Avatar
            person={{name: 'gt3 rs',imageID: '1'}}
            size={200}
        />      

    );
}
function Avatar({person,size}) {
    return(
        <div>
            <figure>
                <img 
                    src="https://tinyurl.com/msa3nt9v" 
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