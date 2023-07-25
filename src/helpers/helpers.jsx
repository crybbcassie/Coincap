export const formatNumber = (n) =>{
  return n >= 1000000000
    ? (n / 1000000000).toFixed(1) + "bi"
    : n >= 1000000
    ? (n / 1000000).toFixed(1) + "mln"
    : n >= 1000
    ? (n / 1000).toFixed(1) + "k"
    : n.toFixed(0);
};

export const formatPrice = (price, formatNumber) =>{
    return "$" + formatNumber(parseFloat(price));
}