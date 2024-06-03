import Title from "../Title"
import Btn from "../Btn"
import ProfileSection from "./ProfileSection"
import styles from "./styles.module.css"
import { useState } from "react"

export default function Profile({avatar, name, bio, phone, email, gitHubUrl, linkedinUrl, twitterUrl}) {
    // [valor, funcaoModificadora]
    const [followText, setFollowText] = useState("Follow")

    function handleClick(ev) {
        alert("Você agora está seguindo !");
        setFollowText("Following");
    }
    
    return (
        <div className={styles.card}>

            <img className={styles.avatar} src={avatar} alt={name} />

            <Title>
                <span>{name}</span>
                <button
                    className={styles.followButton}
                    onClick={handleClick}
                >
                    {followText}
                </button>    
            </Title>          

            <ProfileSection><p>{bio}</p></ProfileSection>

            <ProfileSection><p>{phone}</p></ProfileSection>

            <ProfileSection><p>{email}</p></ProfileSection>
            
            <ProfileSection
                className={styles.buttons}
                id="links-section"
                data-test="some value"
                aria-label="social links"
            >
                <Btn 
                    url={gitHubUrl}
                    btnContent="Github"
                />

                <Btn 
                    url={linkedinUrl}
                    btnContent="Linkedln"
                />

                <Btn 
                    url={twitterUrl}
                    btnContent="Twitter"
                />
            </ProfileSection>

        </div>
    )
}