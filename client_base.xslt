<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:foo="http://www.foo.org/" xmlns:bar="http://www.bar.org">
	<xsl:template match="/">
		<html>
			<head>
				<title>Clients Data Base</title>
				<meta charset="utf-8"/>
			</head>
			<body>
				<table border="1">
					<thead>
						<tr>
							<td>Имя, фамилия</td>
							<td>ID</td>
							<td>Номер телефона</td>
							<td>E-mail</td>
							<td>Напавление</td>
							<td>Место отправления</td>
							<td>Место прибытия</td>
							<td>Дата</td>
							<td>Время</td>
						</tr>
					</thead>
					<tbody>
						<xsl:apply-templates select="//client" mode="table"/>
					</tbody>
				</table>
			</body>
		</html>
	</xsl:template>
	<xsl:template match="//client" mode="table">
		<tr>
			<td><xsl:value-of select="@name"/>&#160;<xsl:value-of select="@surname"/></td>
			<td><xsl:value-of select="@id"/></td>
			<td><xsl:value-of select="@tel"/></td>
			<td><xsl:value-of select="@email"/></td>
			<td><xsl:value-of select="current()/direction"/></td>
			<td><xsl:value-of select="current()/onset"/></td>
			<td><xsl:value-of select="current()/destination"/></td>
			<td><xsl:value-of select="current()/date"/></td>
			<td><xsl:value-of select="current()/time"/></td>
		</tr>
	</xsl:template>
</xsl:stylesheet>