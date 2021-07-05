import firebaseApp from './firebase';

class CardRepository{
  // 데이터 쓰기
  saveCard(userId, card){
    firebaseApp
      .database()
      .ref(`${userId}/cards/${card.id}`)
      .set(card)
  }

  // 데이터 삭제
  removeCard(userId, card){
    firebaseApp
      .database()
      .ref(`${userId}/cards/${card.id}`)
      .remove();
  }

  // 데이터 읽기
  syncCards(userId, onUpdate){
    const ref = firebaseApp.database().ref(`${userId}/cards`);
    ref.on('value', (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => ref.off();
  }
}

export default CardRepository;