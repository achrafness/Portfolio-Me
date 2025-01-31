import { Poppins } from 'next/font/google'

const poppins = Poppins({
    subsets: ['latin'], 
    weight: ['800'], 
});

const Logo = () => {
    return (
        <div className={`${poppins.className} text-purple-heart text-2xl md:text-3xl font-bold`}>
            &lt; / Achraf &gt;
        </div>
    );
};

export default Logo;
