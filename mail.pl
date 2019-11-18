#!/usr/bin/perl
use strict;
use Plack;
use Plack::Request;
use Plack::Builder;
use Data::Dumper;
use Encode;	                            # модуль для перекодирования строк
use Email::Sender::Simple qw(sendmail); # модуль  отправки email по протоколу SMTP
use Email::Sender::Transport::SMTP;     # модуль  отправки email по протоколу SMTP
use Email::Simple::Creator;             # модуль для создания email
use Email::MIME::CreateHTML;            # модуль для создания email с файлами
use File::Copy qw(move);
use JSON;
use utf8;
use LWP::UserAgent;
use HTTP::Request;

my $send_mail = sub {
	my $env = shift;

	my $req = Plack::Request->new($env);
	my $res = $req->new_response(200);
	$res->header('Content-Type' => 'text/html', charset => 'Utf-8', 'Access-Control-Allow-Origin' => '*');
	# Хэш с данными для email
	my %email;
	$email{from} = '"site@bslab.io" <site@bslab.io>';
	$email{to}   = 'gyk088@gmail.com, sonki-lapka@mail.ru';

	# Объект email
	my $message;
	my $params = $req->parameters;

	$res->finalize unless $params->{recaptcha_token};

	my $siteverify = api_request($params->{recaptcha_token});

	$res->finalize unless $siteverify->{success};

	# Если нет телефона завершаем работу скрипта
	return $res->finalize unless ($params->{phone});
	my $file;
	$file = upload_file($req->uploads->{userfile}) if $req->uploads->{userfile};

	$email{message} = '';
	$email{message} .= "<p> Name: $params->{name} </p>"      if $params->{name};
	$email{message} .= "<p> Phone: $params->{phone} </p>" if $params->{phone};
	$email{message} .= "<p> Message: $params->{msg} </p>" if $params->{msg};

 	$email{subject} = 'Question site@bslab.io';
 	$email{subject} = 'Resume site@bslab.io' if $file;

 	# Создаем email и прекрепляем файл для отправки
	my $message = Email::MIME->create_html(
		header => [
			From    => $email{from},
			To      => $email{to},
			Subject => $email{subject},
			'Content-Type'  => 'text/html',
			'charset'       => 'Utf-8',
		],
		body    => decode('UTF-8', $email{message}),
		$file ? (objects => $file) : ()
	);

	# Настройка SMTP
	my $transport = Email::Sender::Transport::SMTP->new({
        host          => 'mail.alaskartech.com',
        port          => '465',
        sasl_username => 'site@bslab.io',
        sasl_password => 'Dairai8R',
        ssl           => 1,
        debug         => 0,
    });

	# Отправка email с помощью SMTP протокола
	sendmail($message, { transport => $transport });

	`rm -R $ENV{PWD}/files/` if $file;

	$res->finalize;
};

my $main_app = builder {
	mount "/" => builder { $send_mail; };
};

=nd
Method: upload_file
	Загрузка файла на сервер
=cut
sub upload_file {
	my $upload = shift;
	my $file_name = $upload->{filename};
	# Пробелы заменяем на нижнее подчеркивание
	$file_name =~ s/\s/_/g;
	$file_name =~ s/#/_/g;
	$file_name =~ s/,/_/g;
	# Получаем расширение файла
	my ($file_extension) = $file_name =~ m#([^.]+)$#;
	$file_extension =~ /\.([^.]+)$/gi;
	$file_extension = lc $file_extension;
	$file_name =~ s/$file_extension//g;
	$file_name =~ s/\.//g;
	my $path = "$ENV{PWD}/files/";
	# Создаем каталог если его не существует
	mkdir $path if (!-d $path);
	# Новое имя если задано в параметрах
	$file_name = join('', localtime);
	$file_name = $file_name . '.' . $file_extension;
	# Путь с именем файла
	$path .= $file_name;
	# Перемещаем файл
	move $upload->{tempname}, $path;

	return {$file_name => $path};
}

sub api_request {
	my $recaptcha_token = shift;

	my $req = HTTP::Request->new(POST => 'https://www.google.com/recaptcha/api/siteverify');
	$req->content_type('application/x-www-form-urlencoded');
	$req->content("secret=6LfDF8IUAAAAANlH4o6RCAGDgvhpiy_O_thnbJbO&response=$recaptcha_token");


	my $lwp = LWP::UserAgent->new;
	my $http_resp = $lwp->request($req);
	return warn "|WARNING: HTTP Reques: " . $http_resp->code if $http_resp->code ne '200';

	JSON->new->utf8->decode($http_resp->content) if $http_resp->content;
}