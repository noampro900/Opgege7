// Grims counter
let grims = parseInt(localStorage.getItem('grims')) || 0;
document.getElementById('grims').textContent = grims;

// Collection
let collection = JSON.parse(localStorage.getItem('collection')) || [];

// Promo code redemption statuses (stored in localStorage)
let promoCodesRedeemed = JSON.parse(localStorage.getItem('promoCodesRedeemed')) || {};

// Function to save redeemed status
function saveRedeemedStatus(code) {
    promoCodesRedeemed[code] = true;
    localStorage.setItem('promoCodesRedeemed', JSON.stringify(promoCodesRedeemed));
}

// Promo code functionality
document.getElementById('redeemButton').addEventListener('click', function() {
    const promoCode = document.getElementById('promoCodeInput').value;
    let message = '';

    if (promoCodesRedeemed[promoCode]) {
        message = 'This promo code has already been redeemed.';
    } else {
        switch (promoCode) {
            case 'ilovethisgame':
                grims += 100;
                message = 'Promo code applied! You received 100 Grims!';
                saveRedeemedStatus(promoCode);
                break;
            case 'purcheaseee/395939548':
                grims += 2;
                message = 'Promo code applied! You received 2 Grims!';
                saveRedeemedStatus(promoCode);
                break;
            case 'wonbscode--659oo874534857oo':
                grims += 2;
                message = 'Promo code applied! You received 2 Grims!';
                saveRedeemedStatus(promoCode);
                break;
            case 'promolinegass-gfrreeee=6-3784844':
                grims += 6;
                message = 'Promo code applied! You received 6 Grims!';
                saveRedeemedStatus(promoCode);
                break;
            case 'promolinegass-gfrreeee=7-37824844':
                grims += 7;
                message = 'Promo code applied! You received 7 Grims!';
                saveRedeemedStatus(promoCode);
                break;
            case 'promolinegass-gfrreeee=8-371111184844':
                grims += 8;
                message = 'Promo code applied! You received 8 Grims!';
                saveRedeemedStatus(promoCode);
                break;
            case 'promolinegass-gfrreeenoe=100-3711211184844':
                grims += 100;
                message = 'Promo code applied! You received 100 Grims! sirrrr!!';
                saveRedeemedStatus(promoCode);
                break;
            case 'promolinegass-gfrrnooeeee=4-3711121184844':
                grims += 4;
                message = 'Promo code applied! You received 4 Grims!';
                saveRedeemedStatus(promoCode);
                break;
            case 'promolinegass-gfrrnoeeee=8-371111184844':
                grims += 1;
                message = 'Promo code applied! You received 1 Grims!🙃';
                saveRedeemedStatus(promoCode);
                break;
            case 'promolinegass-gfrreeee=no8-371111184844':
                grims += 4;
                message = 'Promo code applied! You received 4 Grims!';
                saveRedeemedStatus(promoCode);
                break;
            case 'promolinegass-gfrrenonoeee=8-371111184844':
                grims += 5;
                message = 'Promo code applied! You received 5 Grims!';
                saveRedeemedStatus(promoCode);
                break;
            case 'promolinegass-gfnorreeee=8-371111184844':
                grims += 6;
                message = 'Promo code applied! You received 6 Grims!';
                saveRedeemedStatus(promoCode);
                break;
            case 'promolineganoss-gfrreeee=8-371111184844':
                grims += 5;
                message = 'Promo code applied! You received 5 Grims! sirrr!';
                saveRedeemedStatus(promoCode);
                break;
            case 'yihh8':
                grims += 3;
                message = 'Promo code applied! You received 5 Grims! sirrr!';
                saveRedeemedStatus(promoCode);
                break;
            case 'talala talal 3':
                grims += 18;
                message = 'Promo code applied! You received 5 Grims! sirrr!';
                saveRedeemedStatus(promoCode);
                break;
            default:
                message = 'Invalid promo code. Please try again.';
        }
    }

    document.getElementById('grims').textContent = grims;
    localStorage.setItem('grims', grims);
    document.getElementById('promoMessage').textContent = message;
});

// Update grims every 7 minutes (420,000 ms)
setInterval(function() {
    grims += 2;
    document.getElementById('grims').textContent = grims;
    localStorage.setItem('grims', grims);
}, 420000);

// Handle purchasing items
document.getElementById('item').addEventListener('click', function() {
    if (grims >= 8) {
        grims -= 8;
        document.getElementById('grims').textContent = grims;
        document.getElementById('purchaseMessage').textContent = "Purchase succeed!";
        collection.push('https://noampro900.github.io/data5555555555/%D7%97%D7%A1%D7%A8%20%D7%9B%D7%95%D7%AA%D7%A8%D7%AA149_20240922011550%20(1).png');
        localStorage.setItem('collection', JSON.stringify(collection));
        localStorage.setItem('grims', grims);
    } else {
        document.getElementById('purchaseMessage').textContent = "Not enough grims!";
    }
});

// Show collection
document.getElementById('myCollectionBtn').addEventListener('click', function() {
    document.getElementById('shop').style.display = 'none';
    document.getElementById('collection').style.display = 'block';
    const collectionDiv = document.getElementById('collectionImages');
    collectionDiv.innerHTML = '';
    collection.forEach(imagePath => {
        const img = document.createElement('img');
        img.src = imagePath;
        collectionDiv.appendChild(img);
    });
});

// Back to shop
document.getElementById('backToShopBtn').addEventListener('click', function() {
    document.getElementById('collection').style.display = 'none';
    document.getElementById('shop').style.display = 'block';
});

// Handle free grims one-time offer (5 Grims)
document.getElementById('freeGrims').addEventListener('click', function() {
    if (!localStorage.getItem('hasClaimedFreeGrims')) {
        grims += 5;
        document.getElementById('grims').textContent = grims;
        localStorage.setItem('grims', grims);
        document.getElementById('freeGrimsMessage').textContent = "You received 5 grims!";
        localStorage.setItem('hasClaimedFreeGrims', 'true');
        document.getElementById('freeGrims').style.display = 'none';
    } else {
        document.getElementById('freeGrimsMessage').textContent = "You have already claimed your free grims!";
    }
});

// Handle limited-time free 15 grims offer
document.getElementById('limitedOfferGrims').addEventListener('click', function() {
    let now = new Date().getTime();
    if (!localStorage.getItem('hasClaimedLimitedOffer')) {
        if (now <= offerDeadline) {
            grims += 15;
            document.getElementById('grims').textContent = grims;
            localStorage.setItem('grims', grims);
            document.getElementById('limitedOfferMessage').textContent = "You received 15 grims!";
            localStorage.setItem('hasClaimedLimitedOffer', 'true');
            document.getElementById('limitedOfferGrims').style.display = 'none';
        } else {
            document.getElementById('limitedOfferMessage').textContent = "The offer has expired!";
            document.getElementById('limitedOfferGrims').style.display = 'none';
        }
    } else {
        document.getElementById('limitedOfferMessage').textContent = "You have already claimed your free grims!";
    }
});

// Additional event listeners for other features follow the same pattern...
