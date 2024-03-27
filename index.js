
function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;
    return Math.abs(pickupLocation - hqLocation); // Absolute difference between pickup location and headquarters
}
// Function to calculate the distance in feet from Scuber's headquarters
// to a given pickup location
function distanceFromHqInFeet(pickupLocation) {
    const hqLocation = 42;
    return Math.abs((pickupLocation - hqLocation)* 264);

}
function distanceTravelledInFeet (start,destination) {
    const travelledblocks = Math.abs(start - destination);
    return travelledblocks * 264;
}function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);

    if (distanceInFeet <= 400) {
        return 0; // First 400 feet are free
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
        return (distanceInFeet - 400) * 0.02; // 2 cents per foot after the first 400 feet
    } else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
        return 25; // Flat fare of $25 for distance over 2000 feet and under 2500 feet
    } else {
        return 'cannot travel that far'; // Scuber does not allow rides over 2500 feet
    }
}
