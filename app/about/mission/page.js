

import Button from "@/app/components/button";
import thumb from "@/public/images/thumb.jpg";
import Image from "next/image";

export default function Mission() {
    return (
        <main className="mt-10">
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nostrum reprehenderit delectus enim eum, ex quibusdam necessitatibus. Perspiciatis, laboriosam pariatur ut nobis sit temporibus ad sapiente neque aliquid vel amet aspernatur dolore dolor assumenda voluptates?</div>


            <Image src={thumb} alt="Thumb Image" />

            <Button />
        </main>
    );
}