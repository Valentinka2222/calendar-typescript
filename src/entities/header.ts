type HeaderProps = {
  handleCurrentWeek: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleNextWeek: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handlePreviousWeek: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isShowModal: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
export default HeaderProps