import { SearchOutlined, VideoCallOutlined } from "@mui/icons-material";
import AccountCircleOutlined from "@mui/icons-material/AccountCircleOutlined";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Upload from "./Upload";

const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  height: 56px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0 20px;
`;

const Search = styled.div`
  position: absolute;
  width: 60%;
  height: 40px;
  left: 0px;
  right: 150px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  border: 1px solid #ccc;
  border-radius: 20px;
`;

const Input = styled.input`
  border: none;
  border-right: 1px solid #ccc;
  padding-right: 10px;
  outline: none;
  height: 100%;
  width: 92%;
  font-size: 16px;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #999;
`;

const Navbar = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  return (
    <>
      <Container>
        <Wrapper>
          <Search>
            <Input
              placeholder="Search"
              onChange={(e) => setQuery(e.target.value)}
            />
            <SearchOutlined onClick={() => navigate(`/search?q=${query}`)} />
          </Search>
          {currentUser ? (
            <User>
              <VideoCallOutlined
                onClick={() => setOpen(true)}
                style={{ cursor: "pointer" }}
              />
              <Avatar src={currentUser.img || "/assets/no-profile.jpg"} />
              {currentUser.name}
            </User>
          ) : (
            <Link to="signin" style={{ textDecoration: "none" }}>
              <Button>
                <AccountCircleOutlined />
                SIGN IN
              </Button>
            </Link>
          )}
        </Wrapper>
      </Container>
      {open && <Upload setOpen={setOpen} />}
    </>
  );
};

export default Navbar;
