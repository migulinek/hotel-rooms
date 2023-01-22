export interface RoomPrice {
  price: number;
  currencyCode: string;
  checkedPrice?: number;
}

const RoomPrice = ({ price, currencyCode, checkedPrice }: RoomPrice) => {
  return (
    <h4>
      {checkedPrice && price !== checkedPrice ? (
        <>
          <div>
            {checkedPrice} {currencyCode}
          </div>
          <div className="text-decoration-line-through ">
            <p className="fw-lighter">
              {price} {currencyCode}
            </p>
          </div>
        </>
      ) : (
        <div className="fw-lighter">
          {price} {currencyCode}
        </div>
      )}
    </h4>
  );
};
export default RoomPrice;
