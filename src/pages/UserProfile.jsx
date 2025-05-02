import Signin from "../components/Signin.jsx";
import {useState} from "react";
import { Card, CardBody, CardFooter, Button, Typography } from "@material-tailwind/react";

export default function UserProfile() {
        const [isLogin, setLogin] = useState(false);
        const [isSignup, setSignup] = useState(false);

    return (
        isLogin ? (
            <div className="min-h-screen bg-gray-100 p-6">
                <Card className="w-full max-w-md mx-auto mt-10 p-6 shadow bg-white">
                    <CardBody className="flex flex-col gap-4">
                        <Typography variant="h5" color="blue-gray">
                            User Profile
                        </Typography>
                        <Typography variant="h6" color="blue-gray">
                            Welcome, User!
                        </Typography>
                    </CardBody>
                </Card>
            </div>
        ) : ( 
            <Signin setLogin={setLogin} setSignup={setSignup} />
        )
    );
};    