function status(request, response) {
  response.status(200).json({ chave: "São acima de média" })
}

export default status;
