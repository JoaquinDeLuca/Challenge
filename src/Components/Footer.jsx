
export default function Footer() {
  return (

    <footer className="bg-neutral-900 flex flex-col items-center gap-4 p-3 text-white absolute bottom-0 w-full h-[10vh]">
        <nav>
            <ul className="flex gap-4 justify-center">
                <li>
                    <a href="https://www.instagram.com" target='_blank' rel="noopener noreferrer">Instagram</a>
                </li>
                <li>
                    <a href="https://twitter.com" target='_blank' rel="noopener noreferrer">Twitter</a>
                </li>
                <li>
                    <a href="https://www.tiktok.com/es" target='_blank' rel="noopener noreferrer">TikTok</a>
                </li>
            </ul>
        </nav>
        <p> © Copiright 2022 | Desafío Alkemy</p>
    </footer>
  )
}
