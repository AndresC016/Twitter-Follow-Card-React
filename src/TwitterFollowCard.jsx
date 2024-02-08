import { useState } from "react"

export function TwitterFollowCard ({userName, name}) {
    const [isFollowing, setIsFollowing] = useState(false)

    const text = isFollowing ? 'Siguiendo' :  'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img
                    src={`https://unavatar.io/twitter/${userName}`} alt="Avatar"
                    className="tw-followCard-avatar" />
                <div>
                    <strong>{name}</strong>
                    <span>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-unfollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}