const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const currentDate = document.querySelector(".currentDate");
currentDate.innerHTML = `Novos pedidos foram realizados desde o último acesso ao sistema. Hoje é <strong>${day}/${month}/${year}</strong>.`;

// // Aguarda 5 segundos antes de ocultar a mensagem
// setTimeout(() => {
// 	const flashMessage = document.getElementById("flash-message");
// 	if (flashMessage) {
// 		flashMessage.style.display = "none";
// 	}
// }, 5000); // 5000 ms = 5 segundos

	setTimeout(() => {
		const flashMessage = document.getElementById("flash-message");
		if (flashMessage) {
			flashMessage.style.opacity = "0";
			setTimeout(() => {
				flashMessage.style.display = "none";
			}, 500); // Tempo para a transição finalizar
		}
	}, 3000);