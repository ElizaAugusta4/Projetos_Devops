import logging
from logging.handlers import RotatingFileHandler

class CustomLogger:
    def __init__(self, name, level=logging.DEBUG):
        self.logger = logging.getLogger(name)
        self.logger.setLevel(level)

        log_formatter = logging.Formatter('%(asctime)s - %(levelname)s - %(message)s')

        rotating_file_handler = RotatingFileHandler(f'{name}.log', maxBytes=1024, backupCount=3)
        rotating_file_handler.setFormatter(log_formatter)
        self.logger.addHandler(rotating_file_handler)

        console_handler = logging.StreamHandler()
        console_handler.setFormatter(log_formatter)
        self.logger.addHandler(console_handler)

    def debug(self, message):
        self.logger.debug(message)

    def info(self, message):
        self.logger.info(message)

    def warning(self, message):
        self.logger.warning(message)

    def error(self, message):
        self.logger.error(message)

    def critical(self, message):
        self.logger.critical(message)

def generate_exception(logger):
    try:
        raise Exception("Mensagem de exceção")
    except Exception as e:
        logger.error(f"Ocorreu uma exceção: {e}")

def main():
    # Criação de uma interface de log personalizada para cada contexto da aplicação
    logger_context1 = CustomLogger("context1", level=logging.INFO)
    logger_context2 = CustomLogger("context2", level=logging.DEBUG)

    # Exemplo de mensagens de log específicas para diferentes contextos
    logger_context1.info('Isso é uma mensagem de informação no contexto 1')
    logger_context2.debug('Isso é uma mensagem de debug no contexto 2')

    # Chamamos a função que gera a exceção, passando o logger como argumento
    generate_exception(logger_context1)

if __name__ == "__main__":
    main()
