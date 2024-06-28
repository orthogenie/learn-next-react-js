import LikeButton from "./like-button";

// Props are objects; can reference using object destructuring
function Header({ title }) {
    // console.log(title); // { 'React' }
    return <h1>{title ? title : 'Default Title.'}</h1>;
}

export default function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

    return (
        <div>
            {/* Nesting the Header component */}
            <Header title="Develop. Preview. Ship." />
            <ul>
                {names.map((name) => (
                    // key should be something unique
                    <li key={name}>{name}</li>
                ))}
            </ul>
            <LikeButton />
        </div>
    );
}