import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AmountItems } from "../AmountItems";
import { Container } from "./styles";

import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";

import { api } from "../../services/api";

import avatarPlaceholder from "../../assets/img-placeholder.png";

function truncateDescription(str, num) {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + "...";
}

export function FoodThumbCaroussel({
  id,
  avatar,
  picName,
  description,
  price,
}) {
  const { user } = useAuth();
  const [isFavorite, setIsFavorite] = useState("");
  const [userFavoritesList, setUserFavoritesList] = useState([]);

  const truncatedDescription = truncateDescription(description, 88);

  const avatarURL = avatar
    ? `${api.defaults.baseURL}/files/${avatar}`
    : avatarPlaceholder;

  async function handleFavoriteClick() {
    try {
      if (isFavorite) {
        await api.delete(`/favorites/${id}`, { withCredentials: true });

        setUserFavoritesList((prevList) =>
          prevList.filter((dish) => dish.dishes_id !== id)
        );
      } else {
        await api.post(`/favorites/${id}`, { withCredentials: true });
      }
      setIsFavorite(!isFavorite);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    async function checkFavorite() {
      try {
        const response = await api.get(`/favorites/${user.id}`, {
          withCredentials: true,
        });

        for (let dish of response.data) {
          setUserFavoritesList((prevList) => [...prevList, dish]);
        }
      } catch (error) {
        console.error(error);
      }
    }
    checkFavorite();
  }, [id, user.id, isFavorite]);

  return (
    <Container>
      {user.role === USER_ROLE.ADMIN ? (
        <Link to={`/edit/${id}`} className="editFavIcons">
          <svg
            id="editIcon"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.7514 4.81033L21.1896 12.2486M7.99997 25H2.06262C1.7808 25 1.51052 24.888 1.31124 24.6888C1.11196 24.4895 1.00001 24.2192 1.00001 23.9374V18C0.999523 17.8621 1.02626 17.7253 1.07868 17.5977C1.1311 17.4701 1.20818 17.354 1.30551 17.2562L17.2447 1.31701C17.3436 1.21661 17.4614 1.13687 17.5914 1.08245C17.7214 1.02803 17.8609 1 18.0018 1C18.1427 1 18.2822 1.02803 18.4122 1.08245C18.5422 1.13687 18.66 1.21661 18.7589 1.31701L24.683 7.24107C24.7834 7.33995 24.8631 7.45781 24.9175 7.58779C24.972 7.71777 25 7.85727 25 7.99819C25 8.1391 24.972 8.27861 24.9175 8.40859C24.8631 8.53857 24.7834 8.65642 24.683 8.7553L8.7438 24.6945C8.64599 24.7918 8.52994 24.8689 8.40231 24.9213C8.27467 24.9737 8.13795 25.0005 7.99997 25Z"
              stroke="#E1E1E6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      ) : (
        <Link className="editFavIcons">
          <svg
            id="favoriteIcon"
            width="26"
            height="24"
            viewBox="0 0 26 24"
            fill={
              userFavoritesList.some((favorite) => favorite.dishes_id === id)
                ? "#E1E1E6"
                : "none"
            }
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleFavoriteClick}
          >
            <path
              d="M13.6997 22.704L23.0754 12.478C25.3788 9.95304 25.7145 5.82477 23.5384 3.18621C22.9926 2.52129 22.3283 1.9847 21.586 1.60925C20.8437 1.23379 20.0391 1.02735 19.2211 1.00254C18.4032 0.977725 17.5893 1.13506 16.829 1.46493C16.0687 1.7948 15.3781 2.29028 14.7993 2.9211L13.0399 4.85267L11.5236 3.18621C9.2086 0.673905 5.4236 0.30779 3.00443 2.68123C2.39479 3.27646 1.90282 4.00102 1.55859 4.81063C1.21435 5.62024 1.02508 6.4979 1.00233 7.38999C0.979577 8.28208 1.12383 9.16986 1.42627 9.99908C1.72872 10.8283 2.183 11.5816 2.76136 12.2129L12.3801 22.704C12.5557 22.8936 12.7928 23 13.0399 23C13.287 23 13.5241 22.8936 13.6997 22.704Z"
              stroke={
                userFavoritesList.some((favorite) => favorite.dishes_id === id)
                  ? "#E1E1E6"
                  : "#E1E1E6"
              }
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      )}

      <Link to={`/details/${id}`}>
        <div id="imgContainer">
          <img src={avatarURL} alt={picName} />
        </div>
        <h1>{picName}</h1>
        <p>{truncatedDescription}</p>
      </Link>
      <span>${price}</span>
      {user.role !== USER_ROLE.ADMIN ? (
        <div id="buyAmountBox">
          <AmountItems id={id} />
        </div>
      ) : (
        <></>
      )}
    </Container>
  );
}
