import css from './FriendList.module.css'

export const FriendList = ({friends}) => (
    <ul className={css.friendList}>
        {
            friends.map(({ avatar, name, isOnline, id }) => (
                <li className={css.item} key={id}>
                    {
                    isOnline ?
                    <span className={css.statusTrue}></span>
                    :
                    <span className={css.statusFalse}></span>
                    }
                    <img className={css.avatar} src={avatar}
                        alt={name} width="48" />
                    <p className={css.name}>{name}</p>
            </li>
        ))
        }
    </ul>
)
