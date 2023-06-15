import axios from "axios"
import { useEffect } from "react"
import { useRouter } from "next/router"
import SuccesPay from "@/components/SuccesPay"

export default function succes() {


    const router = useRouter();
    const {id} = router.query;

    return (
        <div>
            <SuccesPay id={id} />
        </div>
    )
}