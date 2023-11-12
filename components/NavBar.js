import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {

    const router = useRouter();

    return (
        <nav>
            <Link href="/" legacyBehavior><a className={router.pathname === "/" ? "active" : ""}>Home</a></Link>
            <Link href="/about" legacyBehavior><a className={router.pathname === "/about" ? "active" : ""}>About</a></Link>

            <style jsx>{`
                
                nav{
                    display: flex;
                    justify-content:start;
                    border: 3px solid dodgerblue;
                    border-radius:30px;
                    padding:10px 10px 10px 20px;
                }

                a{
                    display:inline-block;
                    text-decoration:none;
                    color:#030303;
                    text-transform:uppercase;
                    margin-right:20px;
                    font-weight: 600;
                }

                a:last-child{
                    margin-right:0;
                }

                .active{
                    color:dodgerblue;
                }
            `}</style>

        </nav>

    )
}